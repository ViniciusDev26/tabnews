import type { NextApiRequest, NextApiResponse } from "next";
import database from "../../../infra/database";

export default async function status(
	request: NextApiRequest,
	response: NextApiResponse,
) {
	const result = await database.query("SELECT NOW()");
	console.log(result);
	return response.status(200).json({ status: "ok" });
}
