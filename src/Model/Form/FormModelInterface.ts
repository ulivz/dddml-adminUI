import FormElementModel from "./FormElementModel";

interface FormModelInterface {
    title: string;
    data: any;
    elements: FormElementModel[];
}

export default FormModelInterface;