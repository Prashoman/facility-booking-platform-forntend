

const Sidebar = () => {
    return (
        <div>
            <div className="bg-gray-500 w-full h-screen">
                <div>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt=""
                            className="h-20 w-20 rounded-full"
                        />
                    </div>
                    <div className="text-center text-white">
                        <h1 className="text-lg font-bold">John Doe</h1>
                        <p className="text-sm">Admin</p>
                    </div>
                </div>
                <div className="divider">OR</div>
                <div className="w-full px-4">
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="block text-white p-2 hover:bg-gray-600">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-white p-2 hover:bg-gray-600">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-white p-2 hover:bg-gray-600">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-white p-2 hover:bg-gray-600">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;