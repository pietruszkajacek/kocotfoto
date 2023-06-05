import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Author from '../interfaces/author'
import markdownToHtml from './markdownToHtml'

const postsDirectory = join(process.cwd(), '_posts')
const strengthsDirectory = join(process.cwd(), '_strengths')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getStrengthsSlugs() {
    return fs.readdirSync(strengthsDirectory)
}

export function getDataBySlug(slug: string, dataDirectory: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(dataDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    let { data, content } = matter(fileContents)
    
    // content = await markdownToHtml(content || '')

    // console.log('dd', content)
    
    type Items = {
        //[key: string]: string | { [key: string]: string }
        [key: string]: string | any       
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
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

// export function getAllPosts(fields: string[] = []) {
//     const slugs = getPostSlugs()
//     const posts = slugs
//         .map((slug) => getPostBySlug(slug, fields))
//         // sort posts by date in descending order
//         .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//     return posts
// }

export function getAllStrengths(fields: string[] = []) {
    const slugs = getStrengthsSlugs()
    const strengths = slugs
        .map((slug) => getStrengthBySlug(slug, fields))
        .sort((strength1, strength2) => (strength1['order'] > strength2['order'] ? 1 : -1))
    return strengths
}