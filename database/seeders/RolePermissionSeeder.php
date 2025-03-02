<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'manage statistics',
            'manage products',
            'manage principles',
            'manage testimonials',
            'manage clients',
            'manage teams',
            'manage abouts',
            'manage appointments',
            'manage hero sections',
        ];

        foreach($permissions as $permission) {
            Permission::firstOrCreate(
                [
                    'name' => $permission
                ]
                );
        }

        $superAdminRole = Role::firstOrCreate([
            'name' => 'super_admin'
        ]);

        $allPermissions = Permission::all();
        $superAdminRole->syncPermissions($allPermissions);

        $user = User::create([
            'name' => 'SuperAdmin',
            'email' => 'super@admin.com',
            'password' => bcrypt('superadmin123')
        ]);

        $user->assignRole($superAdminRole);


    }
}
