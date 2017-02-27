interface LinkModelInterface {
    label: string;
    route: {
        name: string;
        params: {
            [name: string]: string
        }
    };
}