import { useState } from 'react';
import CustomDataTable2 from '@/components/customui/DataTable2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { GoPasskeyFill } from "react-icons/go";
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const data = [
  {
    id: 'm5gr84i9',
    name: 'Admin',
    email: 'admin@gmail.com',
  },
];

const Users = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleAddUser = () => {
    setIsUserModalOpen(true);
  };

  const handlePasswordChange = () => {
    setIsPasswordModalOpen(true);
  };

  const handleUserModalClose = () => {
    setIsUserModalOpen(false);
    setNewUser({ name: '', email: '' });
  };

  const handlePasswordModalClose = () => {
    setIsPasswordModalOpen(false);
    setNewUser({ name: '', email: '' });
  };

  const handleSaveUser = () => {
    console.log('New User:', newUser);
    setIsUserModalOpen(false);
  };

  const columns = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
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
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    },
    {
      accessorKey: 'password',
      header: () => <div className='text-center'>Password</div>,
      cell: ({ row }) => {
        return (
          <div className="text-center font-large">
            <button onClick={handlePasswordChange}>
              <GoPasskeyFill />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Card className="w-full rounded-2xl px-4 mt-2">
        <CardHeader className="">
          <CardTitle className="font-normal text-[22px] flex justify-between items-center">
            Users
            <Button onClick={handleAddUser} variant="default">
              Add User
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CustomDataTable2 data={data} columns={columns} />
        </CardContent>
      </Card>

      {/* User Modal */}
      {/* {isUserModalOpen && (
        <Dialog open={isUserModalOpen} onOpenChange={handleUserModalClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="Enter user name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="Enter user email"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={handleUserModalClose}>Cancel</Button>
              <Button onClick={handleSaveUser}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )} */}

      {/* Password Modal */}
      {/* {isPasswordModalOpen && (
        <Dialog open={isPasswordModalOpen} onOpenChange={handlePasswordModalClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={handlePasswordModalClose}>Cancel</Button>
              <Button onClick={handlePasswordModalClose}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )} */}
    </>
  );
};

export default Users;
