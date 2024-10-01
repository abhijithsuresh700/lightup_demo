import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Input } from "@/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/Card";

const data = [
  {
    id: "14556",
    amount: 316,
    email: "ken99@yahoo.com",
    metric: "Category Activity",
    monitor: "Event monitor",
    startTime: "11/29/2023 10:00:00 AM",
    duration: "1s",
    status: "Unviewed",
    severity: "Medium",
    dataSource: "Databricks",
    schema: "dqccnumberconformity",
  },
  {
    id: "14557",
    amount: 242,
    email: "Abe45@gmail.com",
    metric: "Category Activity",
    monitor: "Event monitor",
    startTime: "11/29/2023 10:00:00 AM",
    duration: "1s",
    status: "Unviewed",
    severity: "Medium",
    dataSource: "Databricks",
    schema: "dqccnumberconformity",
  },
  {
    id: "14558",
    amount: 837,
    email: "Monserrat44@gmail.com",
    metric: "Category Activity",
    monitor: "Event monitor",
    startTime: "11/29/2023 10:00:00 AM",
    duration: "1s",
    status: "Unviewed",
    severity: "Medium",
    dataSource: "Databricks",
    schema: "dqccnumberconformity",
  },
  {
    id: "14559",
    amount: 874,
    email: "Silas22@gmail.com",
    metric: "Category Activity",
    monitor: "Event monitor",
    startTime: "11/29/2023 10:00:00 AM",
    duration: "1s",
    status: "Unviewed",
    severity: "Medium",
    dataSource: "Databricks",
    schema: "dqccnumberconformity",
  },
  {
    id: "14560",
    amount: 721,
    email: "carmella@hotmail.com",
    metric: "Category Activity",
    monitor: "Event monitor",
    startTime: "11/29/2023 10:00:00 AM",
    duration: "1s",
    status: "Unviewed",
    severity: "Medium",
    dataSource: "Databricks",
    schema: "dqccnumberconformity",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "metric",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          METRIC
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("metric")}</div>
    ),
  },
  {
    accessorKey: "monitor",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          MONITOR
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("monitor")}</div>
    ),
  },
  {
    accessorKey: "startTime",
    header: "START TIME",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("startTime")}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: "DURATION",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("duration")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "severity",
    header: "SEVERITY",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("severity")}</div>
    ),
  },
  {
    accessorKey: "dataSource",
    header: "DATASOURCE",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("dataSource")}</div>
    ),
  },
  {
    accessorKey: "schema",
    header: "SCHEMA",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("schema")}</div>
    ),
  },
  {
    accessorKey: "table",
    header: () => <div className="text-right">TABLE</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium"></div>;
    },
  },
];

const CustomDataTable3 = () => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex justify-around items-center gap-10 bg-blue-50" style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
        <div className="flex flex-col items-center p-2">
          <span>Total</span>
          <span>
            <b>406</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Active</span>
          <span>
            <b>0</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Unviewed</span>
          <span>
            <b>406</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Viewed</span>
          <span>
            <b>0</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Closed</span>
          <span>
            <b>0</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Rejected</span>
          <span>
            <b>0</b>
          </span>
        </div>
        <div className="flex flex-col items-center p-2">
          <span>Submitted</span>
          <span>
            <b>0</b>
          </span>
        </div>
      </div>
      <div className="px-10">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter emails..."
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDataTable3;
