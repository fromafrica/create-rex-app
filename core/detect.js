export default function (env) {

    // for the windows fam 
    const winfiltr = env.replace(/\\/g, " ");

    // for the linux fam
    const filtr = winfiltr.replace(/\//g, " ");

    // after making every slash into a space, split into array, get last element
    const bin = filtr.split(" ").pop();

    // poors man's match statement
    if (bin.includes("pnpm")) {
        return "pnpm";
    }
    
    if (bin.includes("yarn")) {
        return "yarn";
    }
    
    if (bin.includes("npm")){
        return "npm";
    }

    // default
    return "npm";
}
