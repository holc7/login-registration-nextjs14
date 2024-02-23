import { NextResponse } from "next/server";
import connectDb from "../../../../utils/db";
import User from "../../../../models/user";
export async function POST(req) {
  try {
    await connectDb();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
