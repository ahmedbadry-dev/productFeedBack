export const initialSuggestions = [
    {
        id: 1,
        title: "Add tags for solutions",
        description: "Easier to search for solutions based on a specific stack.",
        upvotes: 112,
        comments: 2,
        category: "Enhancement",
        upvoted: false,
        status: "Planned",
    },
    {
        id: 2,
        title: "Add a dark theme option",
        description: "It would help people with light sensitivities and who prefer dark mode.",
        upvotes: 99,
        comments: 4,
        category: "Feature",
        upvoted: false,
        status: "In-Progress",
    },
    {
        id: 3,
        title: "Improve mobile responsiveness",
        description: "Make sure the website layout looks good on all mobile devices.",
        upvotes: 45,
        comments: 1,
        category: "UX",
        upvoted: false,
        status: "Planned",
    },
    {
        id: 4,
        title: "Add sorting options for feedback",
        description: "Users should be able to sort feedback by most upvotes, comments, or status.",
        upvotes: 67,
        comments: 3,
        category: "Enhancement",
        upvoted: false,
        status: "In-Progress",
    },
    {
        id: 5,
        title: "Allow image attachments in comments",
        description: "Users want to add images in comments to explain their feedback better.",
        upvotes: 89,
        comments: 5,
        category: "Feature",
        upvoted: false,
        status: "Live",
    }
];


export const initialComments = {
    1: [
        {
            id: 1,
            name: "Anna Kim",
            username: "anna_k",
            avatar: "https://i.pravatar.cc/150?img=1",
            text: "This would make searching so much easier! Love the idea.",
            date: "2026-01-14T10:00:00Z"
        },
        {
            id: 2,
            name: "John Doe",
            username: "john_d",
            avatar: "https://i.pravatar.cc/150?img=2",
            text: "Yes! Please add tags for better filtering.",
            date: "2026-01-14T11:00:00Z"
        }
    ],
    2: [
        {
            id: 1,
            name: "Sara Lee",
            username: "sara_lee",
            avatar: "https://i.pravatar.cc/150?img=3",
            text: "Dark mode would be amazing for night usage.",
            date: "2026-01-14T09:30:00Z"
        },
        {
            id: 2,
            name: "Mike Brown",
            username: "mike_b",
            avatar: "https://i.pravatar.cc/150?img=4",
            text: "I support this feature. My eyes hurt in light mode.",
            date: "2026-01-14T10:15:00Z"
        }
    ],
    3: [
        {
            id: 1,
            name: "Emily Clark",
            username: "emily_c",
            avatar: "https://i.pravatar.cc/150?img=5",
            text: "Mobile responsiveness is crucial, good call!",
            date: "2026-01-14T08:45:00Z"
        }
    ],
    4: [
        {
            id: 1,
            name: "David Wilson",
            username: "david_w",
            avatar: "https://i.pravatar.cc/150?img=6",
            text: "Sorting options would help me find top suggestions faster.",
            date: "2026-01-14T12:00:00Z"
        }
    ],
    5: [
        {
            id: 1,
            name: "Laura Scott",
            username: "laura_s",
            avatar: "https://i.pravatar.cc/150?img=7",
            text: "Adding images in comments would make feedback clearer.",
            date: "2026-01-14T13:00:00Z"
        },
        {
            id: 2,
            name: "David Wilson",
            username: "david_w",
            avatar: "https://i.pravatar.cc/150?img=6",
            text: "Yes! Visual examples are much better.",
            date: "2026-01-14T13:30:00Z"
        }
    ]
}