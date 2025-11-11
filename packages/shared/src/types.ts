export type GenerationInput = {
    idea: string;
    tone?: "playful" | "professional" | "bold";
    language?: string; // e.g., "fr"
};


export type GeneratedAsset = {
    heroTitle: string;
    heroSubtitle: string;
    slogan: string;
    sections: { title: string; body: string }[];
    imageUrls: string[];
};


export type Project = {
    id: string;
    userId: string | null; // nullable for anon by IP
    ipHash: string | null;
    input: GenerationInput;
    output: GeneratedAsset;
    createdAt: string;
};


export const MONTHLY_QUOTA = 5;
