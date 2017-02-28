import TableRowModel from "./TableRowModel";

export default class TableModel {
    public name;
    public rows: TableRowModel[];
    public columns: ColumnInterface[];

    constructor(name: string,
                rows: TableRowModel[] = [],
                columns: ColumnInterface[]) {
        this.name    = name;
        this.rows    = rows;
        this.columns = columns;
    }
}