import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import useUsers from "../../hooks/useUsers";
import Heading from "../heading/Heading";
import "./AllUsers.style.css";

const AllUsers = () => {
    useTitle("All Users");
    const [refetch, isLoading, users] = useUsers();

    const makeAdmin = async (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change the role!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(
                        `${
                            import.meta.env.VITE_SAVORY_SERVER
                        }/api/admin/update-user-role/${email}`,
                        { method: "PATCH" }
                    );
                    const data = await response.json();
                    if (data.message) {
                        Swal.fire({
                            title: data.message,
                            text: "User has been updated to Admin.",
                            icon: "success",
                        });
                        refetch();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    const deleteUser = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(
                        `${
                            import.meta.env.VITE_SAVORY_SERVER
                        }/api/user/${email}`,
                        { method: "DELETE" }
                    );
                    const data = await response.json();
                    if (data.message) {
                        Swal.fire({
                            title: data.message,
                            text: "User has been deleted.",
                            icon: "success",
                        });
                        refetch();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    return (
        <>
            <Heading subHeading="How many??" heading="MANAGE ALL USERS" />

            <div className="user-container">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading &&
                                Array.isArray(users) &&
                                users.map((user, i) => (
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === "admin" ? (
                                                "Admin"
                                            ) : (
                                                <button
                                                    className="user-icon"
                                                    title="Make Admin."
                                                    onClick={() => {
                                                        makeAdmin(user.email);
                                                    }}
                                                >
                                                    <FaUsers />
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            {user.email !==
                                                "faridulccr@gmail.com" && (
                                                <button
                                                    className="dlt-icon"
                                                    onClick={() => {
                                                        deleteUser(user.email);
                                                    }}
                                                >
                                                    <RiDeleteBin6Line />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;
