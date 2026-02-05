"use client"

import { useEffect, useState } from "react"
import { supabaseClient } from "@/lib/supabaseclient"
import axios from "axios";

export default function SupabaseTestPage() {
    const [result, setResult] = useState<string>("Testing...");
    const [fetched, setFetched] = useState<string>();

    useEffect(() => {
        (async () => {
          const {data, error} = await supabaseClient.schema("workout").from("users").select("*");
          if(error) {
            setResult(`Error: ${error.message}`);
            return;
          }

          const res = await axios.get("/api/supabase-test");
          setFetched("Should be 1: " + res.data[0].id);
          
          setResult(`Connected. ${data[0].id}`);
        })();


    },[]);

    return (
        <>
        <main style={{padding: 24}}>
            <h1>Supabase Connection Test</h1>
            <p>{result}</p>
            <p>{fetched}</p>
        </main>
        </>
    )
}

