import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import { remark } from 'remark';
// import html from 'remark-html';

interface Social {
    label: string;
    link: string;
    enable: boolean;
}

interface Element {
    label: string;
    link: string;
}

interface FooterContent {
    component: string;
    logoImage: string;
    logoAlt: string;
    logoColumnText: string;
    social: {
        socials: Social[];
    };
    column2header: string;
    column3header: string;
    column3: {
        elements: Element[];
    };
    column4header: string;
    addressLine1: string;
    addressCsz: string;
    email: string;
}


export const loadContent = (filename: string, log?: boolean) => {
    const fullPath = path.join(process.cwd(), "content", filename)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    if (log) {
        console.log(JSON.stringify(data, null, 2))
        if (content) {
            console.log(content)
        }
    }
    return { data, content }
}
