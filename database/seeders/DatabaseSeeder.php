<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $user = User::where("email", "test@test.com")->first();
        if (empty($user)) {
            User::create([
                "name" => "Test",
                "email" => "test@test.com",
                "password" => Hash::make("123123")
            ]);
        }
    }
}
