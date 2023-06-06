import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Author from '../interfaces/author'
import markdownToHtml from './markdownToHtml'

const postsDirectory = join(process.cwd(), '_posts')
const strengthsDirectory = join(process.cwd(), '_strengths')
const packagesDirectory = join(process.cwd(), '_packages')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

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

export function getPostBySlug(slug: string, fields: string[] = []) {
    return getDataBySlug(slug, postsDirectory, fields)
}

export function getStrengthBySlug(slug: string, fields: string[] = []) {
    return getDataBySlug(slug, strengthsDirectory, fields)
}

export function getPackageBySlug(slug: string, fields: string[] = []) {
    return getDataBySlug(slug, packagesDirectory, fields)
}

// export function getAllPosts(fields: string[] = []) {
//     const slugs = getPostSlugs()
//     const posts = slugs
//         .map((slug) => getPostBySlug(slug, fields))
//         // sort posts by date in descending order
//         .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//     return posts
// }

export async function getAllStrengths(fields: string[] = []) {
    const slugs = getStrengthsSlugs()

    return (await Promise.all(slugs
        .map((slug) => getStrengthBySlug(slug, fields))))
        .sort((strength1, strength2) => (strength1.order > strength2.order ? 1 : -1))
}

export async function getAllPackages(fields: string[] = []) {
    const slugs = getPackagesSlugs()

    return (await Promise.all(slugs
        .map((slug) => getPackageBySlug(slug, fields))))
        .sort((package1, package2) => (package1.order > package2.order ? 1 : -1))
}