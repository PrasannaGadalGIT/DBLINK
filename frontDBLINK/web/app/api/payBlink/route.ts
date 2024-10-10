import {ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, createPostResponse} from "@solana/actions"
import { createCloseAccountInstruction, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import VerifyCreateAndMint from "@/scripts/verboseCreateAndMint"
import mongoose from "mongoose";

const Artist = mongoose.models.artists ;
  
export async function GET(request: Request) {
  // const data = await Artist.find({ title: "Dream Theater" });
  // console.log(data);
  const reqUrl = new URL(request.url)
  const title = reqUrl.searchParams.get('title')
  console.log("Title :  " + title)
  const data2 = await Artist.findOne({ title: title?.replace(/"/g, '') }); // Remove quotes from the title if present
  console.log(data2);
  const iconURL = new URL("/Artist.png", reqUrl.origin)
  
  const response : ActionGetResponse = {
    icon : `${data2?.image}`,
    description : `${data2.description}`,
    title : `${data2.title}`,
    label : "click me!",
    links : {
      actions : [
        {
          href: request.url,
          label: "Pay",
          type: "transaction"
        },
      
      ],
      
    },
    
   
    
  }
  return Response.json(response, {headers : ACTIONS_CORS_HEADERS});
}

export async function POST(request:Request) {
  console.log(request)  
  const postRequest : ActionPostRequest = await request.json()
  const userPubKey = postRequest.account
 
  VerifyCreateAndMint(new PublicKey(userPubKey))

  const connection = new Connection(clusterApiUrl('devnet'))
  const tx = new Transaction()

  const user = new PublicKey(userPubKey)
  console.log(request)
  const ix = SystemProgram.transfer({
    fromPubkey : user,
    toPubkey : new PublicKey('C2JZmf5ubGMmGKUrbEqJ87VwND57t8fTkRcx1Trjh1ji'),
    lamports : LAMPORTS_PER_SOL * 0.1
  })

  tx.add(ix)
  tx.feePayer = new PublicKey(userPubKey)
  tx.recentBlockhash = (await connection.getLatestBlockhash({commitment : "finalized"})).blockhash
  const serialTX = tx.serialize({requireAllSignatures : false, verifySignatures : false}).toString("base64")
  console.log("Recent Blockhash : " + tx.recentBlockhash)

  const response  = {
    transaction : serialTX,
    message : userPubKey,
    type : "ActionPostResponse"
  }

  return Response.json(response, {headers : ACTIONS_CORS_HEADERS})
}

export async function OPTIONS(request:Request) {
  return new Response(null, {headers : ACTIONS_CORS_HEADERS})
}