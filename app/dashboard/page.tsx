"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";

export default function Dashboard() {
    const { getProfile } = useAuth();
    const [profile, setProfile] = useState<any>(null);

    async function fetchProfile() {
        const profile = await getProfile();
        setProfile(profile);

        console.log(profile)
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-2xl">{profile?.fullName}</p>
        </div>
    )
}