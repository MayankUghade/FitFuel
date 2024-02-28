import prisma from "@/utils/client";
import { NextResponse } from "next/server";

//Fetching all the breakfast data
export async function GET() {
  try {
    const fetchLunch = await prisma.lunch.findMany();
    return NextResponse.json(fetchLunch, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "There was an error while fetching the data" },
      { status: 500 }
    );
  }
}

//Creating post request to add breakfast
export async function POST(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);

    const { userEmail, FoodItems, CalorieIntake } = requestBody;

    const AddLunch = await prisma.lunch.create({
      data: {
        userEmail,
        FoodItems,
        CalorieIntake,
      },
    });
    console.log(AddLunch);
    return NextResponse.json(
      { message: "The data is successfully added in the system" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

//Updating the data once added
export async function PATCH(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);

    const { id, FoodItems, CalorieIntake } = requestBody;

    const updateLunch = await prisma.lunch.update({
      where: {
        id,
      },
      data: {
        FoodItems,
        CalorieIntake,
      },
    });
    console.log(updateLunch);
    return NextResponse.json(
      { message: "Updated the data successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const decoder = new TextDecoder();
    const body = decoder.decode(await req.arrayBuffer());
    const requestBody = JSON.parse(body);

    const { id } = requestBody;

    const deleteFood = await prisma.lunch.delete({
      where: {
        id,
      },
    });
    console.log(deleteFood);
    return NextResponse.json(
      { message: "Deleted the data successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
