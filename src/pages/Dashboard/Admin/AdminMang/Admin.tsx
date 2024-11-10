
import { Link } from 'react-router-dom';
import { useGetAllAdminQuery } from '../../../../redux/features/admin/AdminMangement/AdminMangement';
import { TAdmin } from '../../../../utils/type/Admin';

const Admin = () => {

  const {data} = useGetAllAdminQuery(undefined);
  const allAdmin = data?.data;
  console.log({allAdmin});
  
    return (
        <div>
      <div className="w-full flex justify-end pb-4">
        <Link to={"/dashboard/admin/add"} className="btn btn-sm btn-success text-white">
          Create Admin
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Role</th>
              
            </tr>
          </thead>
          <tbody>
            {allAdmin?.length > 0 ? (
              allAdmin?.map((admin:TAdmin, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{admin.name}</td>
                  
                  <td>{admin.email}</td>
                  <td>{admin.phone}</td>
                  <td>{admin.address}</td>
                  <td>{admin.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Admin;