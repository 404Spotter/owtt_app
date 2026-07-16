export interface Post {
    id: string;
    title: string;
    date: string; // ISO date, e.g. '2026-07-14'
    excerpt: string;
    body: string;
}
export const POSTS: Post[] = [
    {
        id: 'globe-launch',
        title: 'The interactive globe is live',
        date: '2026-07-14',
        excerpt: 'You can now pan, zoom, and spin ...',
        body: 'Our new MapLibre-powered globe ...',
    },
    {
        id: 'example',
        title: 'example',
        date: '2026-7-16', 
        excerpt: 'example',
        body: 'example',
    },
];