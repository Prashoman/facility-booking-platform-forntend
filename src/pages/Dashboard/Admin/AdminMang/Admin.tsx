import { Link } from "react-router-dom";
import { useGetAllAdminQuery } from "../../../../redux/features/admin/AdminMangement/AdminMangement";
import { TAdmin } from "../../../../utils/type/Admin";
import { TTableHeader } from "../../../../utils/type/Table";
import Table from "../../../../components/shared/Table/Table";
import TableSkeleton from "../../../../components/shared/TableSkeleton/TableSkeleton";

const Admin = () => {
  const { data, isLoading } = useGetAllAdminQuery(undefined);
  const allAdmin = data?.data;

  const tableHeadings: TTableHeader[] = [
    { title: "SI", key: "si" },
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "Phone", key: "phone" },
    { title: "Address", key: "address" },
    { title: "Role", key: "role" },
  ];

  return (
    <div>
      <div className="w-full flex justify-end pb-4">
        <Link
          to={"/dashboard/admin/add"}
          className="btn btn-sm btn-success text-white"
        >
          Create Admin
        </Link>
      </div>
      <Table data={tableHeadings}>
        {isLoading ? (
          // Skeleton Loader for Table Rows
          Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td colSpan={tableHeadings?.length} className="text-center">
                <TableSkeleton />
              </td>
            </tr>
          ))
        ) : allAdmin?.length > 0 ? (
          allAdmin?.map((admin: TAdmin, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.phone}</td>
              <td>{admin.address}</td>
              <td>
                <button className="bg-gray-400 text-white text-xs rounded px-2 py-1">{admin.role}</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center">
              No data found
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
};

export default Admin;
