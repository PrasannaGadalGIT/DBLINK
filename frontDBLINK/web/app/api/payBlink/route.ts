import {ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, createPostResponse} from "@solana/actions"
import { createCloseAccountInstruction, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import VerifyCreateAndMint from "@/scripts/verboseCreateAndMint"
export async function GET(request: Request) {
  const reqUrl = new URL(request.url)
  const iconURL = new URL("/Artist.png", reqUrl.origin)
  
  const response : ActionGetResponse = {
    icon : `${iconURL}`,
    description : "Recover rent by closing empty token accounts",
    title : "Fee Reedemer",
    label : "click me!",
    links : {
      actions : [
        {
          href : request.url,
          label : "Pay"
        },
      
      ],
      
    }
   
    
  }
  return Response.json(response, {headers : ACTIONS_CORS_HEADERS});
}

export async function POST(request:Request) {
  
  const postRequest : ActionPostRequest = await request.json()
  const userPubKey = postRequest.account
  console.log(request)

  VerifyCreateAndMint(new PublicKey(userPubKey))

  const connection = new Connection(clusterApiUrl('devnet'))
  const tx = new Transaction()
  const amount : number =1
  const user = new PublicKey(userPubKey)

  const ix = SystemProgram.transfer({
    fromPubkey : user,
    toPubkey : new PublicKey('C2JZmf5ubGMmGKUrbEqJ87VwND57t8fTkRcx1Trjh1ji'),
    lamports : 1
  })

  tx.feePayer = new PublicKey(userPubKey)
  tx.recentBlockhash = (await connection.getLatestBlockhash({commitment : "finalized"})).blockhash
  const serialTX = tx.serialize({requireAllSignatures : false, verifySignatures : false}).toString("base64")
  console.log("Recent Blockhash : " + tx.recentBlockhash)
  const response : ActionPostResponse = {
    transaction : "",
    message : userPubKey
  }

  return Response.json(response, {headers : ACTIONS_CORS_HEADERS})
}

export async function OPTIONS(request:Request) {
  return new Response(null, {headers : ACTIONS_CORS_HEADERS})
}