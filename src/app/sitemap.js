export default function sitemap() {
    return [
    {
        url: 'https://oliver.nederal.com/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1, 
    },
    {
        url: 'https://oliver.nederal.com/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://oliver.nederal.com/skills',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    {
        url: 'https://oliver.nederal.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        },
    {
        url: 'https://oliver.nederal.com/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    ]
}