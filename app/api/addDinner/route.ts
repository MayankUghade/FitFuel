import prisma from "@/utils/client";
import { NextResponse } from "next/server";

//Fetching all the breakfast data
export async function GET() {
  try {
    const fetchDinner = await prisma.dinner.findMany();
    return NextResponse.json(fetchDinner, { status: 200 });
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

    const AddDinner = await prisma.dinner.create({
      data: {
        userEmail,
        FoodItems,
        CalorieIntake,
      },
    });
    console.log(AddDinner);
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

    const updateDinner = await prisma.dinner.update({
      where: {
        id,
      },
      data: {
        FoodItems,
        CalorieIntake,
      },
    });
    console.log(updateDinner);
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

    const deleteFood = await prisma.dinner.delete({
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
