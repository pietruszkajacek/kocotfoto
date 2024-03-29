import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from './markdownToHtml'

const strengthsDirectory = join(process.cwd(), '_strengths')
const packagesDirectory = join(process.cwd(), '_packages')

export function getStrengthsSlugs() {
    return fs.readdirSync(strengthsDirectory)
}

export function getPackagesSlugs() {
    return fs.readdirSync(packagesDirectory)
}

export async function getDataBySlug(slug: string, dataDirectory: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(dataDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const contentHTML = await markdownToHtml(content || '')

    type Items = {
        [key: string]: string | { [key: string]: string }
        // [key: string]: string | any
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = contentHTML
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

export function getStrengthBySlug(slug: string, fields: string[] = []) {
    return getDataBySlug(slug, strengthsDirectory, fields)
}

export function getPackageBySlug(slug: string, fields: string[] = []) {
    return getDataBySlug(slug, packagesDirectory, fields)
}

export async function getAllStrengths(fields: string[] = []) {
    const slugs = getStrengthsSlugs()

    return (await Promise.all(slugs
        .map((slug) => getStrengthBySlug(slug, fields))))
        // sort strength by date in asc order
        .sort((strength1, strength2) => (strength1.order > strength2.order ? 1 : -1))
}

export async function getAllPackages(fields: string[] = []) {
    const slugs = getPackagesSlugs()
    
    return (await Promise.all(slugs
        .map((slug) => getPackageBySlug(slug, fields))))
        // sort package by date in asc order
        .sort((package1, package2) => (package1.order > package2.order ? 1 : -1))
}