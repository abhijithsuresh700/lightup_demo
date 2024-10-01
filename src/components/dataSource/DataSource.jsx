import CustomDataTable from "../customui/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { TbBrandDatabricks } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import Dashboard from "../dashboard/Dashboard";
import Incidents from "../incidents/Incidents";

// Example payment data
const data = [
  {
    id: 250,
    name: "Databricks",
    status: "Enabled",
    type: "databricks",
    "connection health": "Healthy",
    "last scanned": "1 day ago",
    metrics: 40,
    tags: "",
  },
  {
    id: 249,
    name: "Postgres",
    status: "Disabled",
    type: "postgres",
    "connection health": "Healthy",
    "last scanned": "About 1 hour ago",
    metrics: 4,
    tags: "",
  },
];

const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize p-1">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex justify-between items-center p-1">
        <div>{row.getValue("name")}</div>
        {row.getValue("status") === "Enabled" && (
          <div className="relative inline-block">
            <div className="w-7 h-7 bg-fuchsia-400 rounded-full flex items-center justify-center">
              {" "}
              {/* Outer circle */}
              <div className="w-2 h-2 bg-fuchsia-800 rounded-full"></div>{" "}
              {/* Inner dot color */}
            </div>
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize flex gap-1 p-1">
        {row.getValue("status") === "Enabled" ? (
          <TbActivityHeartbeat className="text-xl" />
        ) : (
          <MdOutlineHorizontalRule className="text-xl" />
        )}

        <div>{row.getValue("status")}</div>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TYPE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize flex justify-between p-1">
        <div>{row.getValue("type")}</div>
        <div>
          {row.getValue("type") === "databricks" ? (
            <TbBrandDatabricks className="text-xl text-red-300" />
          ) : (
            <BiLogoPostgresql className="text-xl text-sky-500" />
          )}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "connection health",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CONNECTION HEALTH
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize p-1">{row.getValue("connection health")}</div>
    ),
  },
  {
    accessorKey: "last scanned",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          LAST SCANNED
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize p-1">{row.getValue("last scanned")}</div>
    ),
  },
  {
    accessorKey: "metrics",
    header: ({ column }) => {
      return (
        <Button
          className="p-1"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          METRICS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize p-1">{row.getValue("metrics")}</div>
    ),
  },
  {
    accessorKey: "tags",
    header: "TAGS",
    cell: ({ row }) => <div className="capitalize">{row.getValue("tags")}</div>,
  },
];

const DataSource = ({ active }) => {
  return (
    <>
      <Card className="w-full rounded-2xl mt-2 min-h-[80vh] p-0">
        {active === 0 ? (
          <div className="px-4">
            <CardHeader>
              <CardTitle className="font-normal text-[22px]'">
                Datasources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CustomDataTable data={data} columns={columns} />
            </CardContent>
          </div>
        ) : active === 1 ? (
          <>
            <CardHeader>
              <CardTitle className="font-normal text-[22px]'">
                Explorer
              </CardTitle>
            </CardHeader>
            <CardContent>Empty</CardContent>
          </>
        ) : active === 2 ? (
          <>
            <CardHeader>
              <CardTitle className="font-normal text-[22px]'">
                Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>Empty</CardContent>
          </>
        ) : active === 3 ? (
          <>
            <CardHeader>
              <CardTitle className="font-normal text-[22px]'">
                Monitors
              </CardTitle>
            </CardHeader>
            <CardContent>Empty</CardContent>
          </>
        ) : active === 4 ? (
          <>
            <CardContent className='p-0'>
              <Incidents />
            </CardContent>
          </>
        ) : active === 5 ? (
          <Dashboard />
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default DataSource;
