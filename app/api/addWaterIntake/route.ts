import { NextResponse } from "next/server";
import prisma from "@/utils/client";
export async function GET(req: Request) {
  try {
    const waterIntake = await prisma.waterGoal.findMany();
    console.log(waterIntake);
    return NextResponse.json(
      { message: "The fetching was successful" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "There was an error fetching water goal" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);
    const { userEmail, water } = requestBody;

    const AddCalorieIntake = await prisma.waterGoal.create({
      data: {
        userEmail,
        water,
      },
    });

    console.log(AddCalorieIntake);
    return NextResponse.json(
      { message: "Successfully created water goal" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "There was an error creating water goal" },
      { status: 500 }
    );
  }
}
