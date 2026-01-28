"use client"

import { useEffect, useState } from "react"
import { supabaseClient } from "@/lib/supabaseclient"

export default function SupabaseTestPage() {
    const [result, setResult] = useState<string>("Testing...");

    useEffect(() => {
        (async () => {
          const {data, error} = await supabaseClient.schema("workout").from("users").select("*");
          if(error) {
            setResult(`Error: ${error.message}`);
            return;
          }  

          setResult(`Connected. ${data[0].id}`);
        })();
    },[]);

    return (
        <>
        <main style={{padding: 24}}>
            <h1>Supabase Connection Test</h1>
            <p>{result}</p>
        </main>
        </>
    )
}

