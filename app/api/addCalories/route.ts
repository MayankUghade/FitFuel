import { NextResponse } from "next/server";
import prisma from "@/utils/client";

export async function GET() {
  try {
    const calorieGoals = await prisma.calorieGoal.findMany();

    return NextResponse.json(calorieGoals);
  } catch (error) {
    console.error("Error receiving the data:", error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);
    const { userEmail, Calorie } = requestBody;
    console.log(userEmail, Calorie);

    const AddCalorieIntake = await prisma.calorieGoal.create({
      data: {
        userEmail,
        Calorie,
      },
    });
    return NextResponse.json(
      { Message: "The data is successfully addes in the system" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);
    const { userEmail, Calorie } = requestBody;

    const updateCalorie = await prisma.calorieGoal.update({
      where: {
        userEmail,
      },
      data: {
        Calorie,
      },
    });
    return NextResponse.json(
      { message: "The data is successfully updated in the system" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
