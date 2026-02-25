import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'

export default defineConfig({
    name: 'default',
    title: 'Valkiria Luxury Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

    basePath: '/admin',

    plugins: [structureTool(), visionTool()],

    schema: schema,
})
