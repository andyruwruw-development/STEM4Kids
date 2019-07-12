//DATA TYPES

let slider = 
{
    type: "slider",
    index: Number,
    slides: [
        {path: String, title: String, description: String},
    ],
};

let title =
{
    type: "title",
    index: Number,
    text: String,
};

let paragraph = 
{
    type: "paragraph",
    index: Number,
    title: String,
    text: [String, String]
};

let featuredlinks = 
{
    type: "featuredlinks",
    index: Number,
    items: [
        {path: String, title: String, description: String, link: String},
    ],
    link: String,
};