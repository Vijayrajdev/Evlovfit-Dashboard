import React, { useState } from "react";
import Users from "../JSON/user.json";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineExclamation } from "react-icons/ai";
import { TbBell } from "react-icons/tb";
import { PieChart } from "react-minimal-pie-chart";
import ReactTooltip from "react-tooltip";
import ProgressBar from "@ramonak/react-progress-bar";

const User = () => {
  const [feedBacki, setFeedBacki] = useState(true);
  const [feedBackj, setFeedBackj] = useState(true);
  const [feedBackk, setFeedBackk] = useState(true);
  const [user1Val, setUser1Val] = useState(0);
  const [user2Val, setUser2Val] = useState(0);
  const [user3Val, setUser3Val] = useState(0);
  const [user1cVal, setUser1cVal] = useState(0);
  const [user2cVal, setUser2cVal] = useState(0);
  const [user3cVal, setUser3cVal] = useState(0);
  const i = Users["user 1"];
  const j = Users["user 2"];
  const k = Users["user 3"];

  // Feedback controls
  const feedBack = () => {};

  // Formating numbers
  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  return (
    <div className="">
      <div className="flex flex-col p-4 gap-8">
        {/* User 1 */}
        <div
          key={i.userId}
          className="flex items-center justify-between bg-shark-500 p-4 rounded-xl"
        >
          <div className="text-white flex items-center gap-6 w-1/6">
            <img
              class="w-14 h-14 object-cover rounded-full"
              src={i.imgUrl}
              alt="Rounded avatar"
            />
            <div>
              <h1 className="text-md font-semibold">{i.name}</h1>
              <p className="text-xs font-thin">{i.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-1/12">
            <div>
              <CircularProgressbarWithChildren
                className="h-16 w-16"
                value={i.steps.stepsWalked}
                maxValue={i.steps.stepsTarget + user1Val}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "round",
                  pathColor: `rgba(127, 209, 140, ${
                    i.steps.stepsTarget + user1Val / 100
                  })`,
                  trailColor: "#d6d6d6",
                })}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-[14px] font-semibold text-white">
                    {i.steps.stepsWalked}
                  </h1>
                  <p className="text-[8px] font-extralight text-white">
                    Walked
                  </p>
                </div>
              </CircularProgressbarWithChildren>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser1Val(user1Val + 500)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(i.steps.stepsTarget + user1Val)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser1Val(user1Val - 500)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex text-white items-center gap-2">
                <FiUserCheck className="text-xl font-extrabold" />
                <p className="text-md font-semibold">{i.date.performedDate}</p>
              </div>
              {feedBacki ? (
                <div className="flex text-white items-center gap-2 ">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {i.date.scheduledDate}
                  </p>
                </div>
              ) : (
                <div className="flex text-white items-center gap-2 bg-red-500 py-1 px-2 rounded-lg">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {i.date.scheduledDate}
                  </p>
                </div>
              )}
            </div>
            {feedBacki ? (
              <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
                <AiOutlineRight className="text-white" />
              </div>
            ) : (
              <div className="text-white bg-red-500 py-5 px-1 rounded-lg">
                <AiOutlineExclamation className="text-white" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div
              className="text relative"
              data-tip
              data-for="custom-color-no-arrow"
            >
              <PieChart
                lineWidth={20}
                className="h-16 w-16"
                data={[
                  {
                    title: "One",
                    value: i.proteins.proteinConsumed,
                    maxValue: i.proteins.proteinTarget,
                    color: "#F45C84",
                  },
                  {
                    title: "Two",
                    value: i.carb.carbConsumed,
                    maxValue: i.carb.carbTarget,
                    color: "#F5C90F",
                  },
                  {
                    title: "Three",
                    value: i.fat.fatConsumed,
                    maxValue: i.fat.fatTarget,
                    color: "#03C7FC",
                  },
                ]}
              />
              <div className="flex flex-col items-center absolute top-4 right-4">
                <h1 className="text-[14px] font-semibold text-white">
                  {i.calories.calorieIntake}
                </h1>
                <p className="text-[8px] font-extralight text-white">
                  Calories
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser1cVal(user1cVal + 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(i.calories.calorieTarget + user1cVal)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser1cVal(user1cVal - 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>

            <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
              <AiOutlineRight className="text-white" />
            </div>

            <ReactTooltip
              id="custom-color-no-arrow"
              place="bottom"
              className="custom-color-no-arrow"
              delayHide={1000}
              backgroundColor="#333B44"
              effect="solid"
            >
              <div className="w-[200px] flex flex-col gap-2">
                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">PROTEIN</p>
                    <p className="font-thin text-xs">
                      {i.proteins.proteinTarget}g
                    </p>
                  </div>

                  <ProgressBar
                    completed={i.proteins.proteinConsumed}
                    maxCompleted={i.proteins.proteinTarget}
                    customLabel="55g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F45C84"
                    bgColor="#F45C84"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">FATS</p>
                    <p className="font-thin text-xs">{i.fat.fatTarget}g</p>
                  </div>

                  <ProgressBar
                    completed={i.fat.fatConsumed}
                    maxCompleted={i.fat.fatTarget}
                    customLabel="40g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#03C7FC"
                    bgColor="#03C7FC"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">CARBS</p>
                    <p className="font-thin text-xs">{i.carb.carbTarget}g</p>
                  </div>
                  <ProgressBar
                    completed={i.carb.carbConsumed}
                    maxCompleted={i.carb.carbTarget}
                    customLabel="25g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F5C90F"
                    bgColor="#F5C90F"
                    baseBgColor="#101317"
                  />
                </div>
              </div>
            </ReactTooltip>
          </div>

          <div className="bg-[#36F5C7] p-2 rounded-lg cursor-pointer">
            <TbBell className="text-2xl font-extrabold " />
          </div>
        </div>

        {/* User 2 */}
        <div
          key={j.userId}
          className="flex items-center justify-between bg-shark-500 p-4 rounded-xl"
        >
          <div className="text-white flex items-center gap-6 w-1/6">
            <img
              class="w-14 h-14 object-cover rounded-full"
              src={j.imgUrl}
              alt="Rounded avatar"
            />
            <div>
              <h1 className="text-md font-semibold">{j.name}</h1>
              <p className="text-xs font-thin">{j.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-1/12">
            <div>
              <CircularProgressbarWithChildren
                className="h-16 w-16"
                value={j.steps.stepsWalked}
                maxValue={j.steps.stepsTarget + user2Val}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "round",
                  pathColor: `rgba(127, 209, 140, ${
                    j.steps.stepsTarget + user2Val / 100
                  })`,
                  trailColor: "#d6d6d6",
                })}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-[14px] font-semibold text-white">
                    {j.steps.stepsWalked}
                  </h1>
                  <p className="text-[8px] font-extralight text-white">
                    Walked
                  </p>
                </div>
              </CircularProgressbarWithChildren>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser2Val(user2Val + 500)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(j.steps.stepsTarget + user2Val)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser2Val(user2Val - 500)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex text-white items-center gap-2">
                <FiUserCheck className="text-xl font-extrabold" />
                <p className="text-md font-semibold">{j.date.performedDate}</p>
              </div>
              {feedBackj ? (
                <div className="flex text-white items-center gap-2 ">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {j.date.scheduledDate}
                  </p>
                </div>
              ) : (
                <div className="flex text-white items-center gap-2 bg-red-500 py-1 px-2 rounded-lg">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {j.date.scheduledDate}
                  </p>
                </div>
              )}
            </div>
            {feedBackj ? (
              <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
                <AiOutlineRight className="text-white" />
              </div>
            ) : (
              <div className="text-white bg-red-500 py-5 px-1 rounded-lg">
                <AiOutlineExclamation className="text-white" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div
              className="text relative"
              data-tip
              data-for="custom-color-no-arrow2"
            >
              <PieChart
                lineWidth={20}
                className="h-16 w-16"
                data={[
                  {
                    title: "One",
                    value: j.proteins.proteinConsumed,
                    maxValue: j.proteins.proteinTarget,
                    color: "#F45C84",
                  },
                  {
                    title: "Two",
                    value: j.carb.carbConsumed,
                    maxValue: j.carb.carbTarget,
                    color: "#F5C90F",
                  },
                  {
                    title: "Three",
                    value: j.fat.fatConsumed,
                    maxValue: j.fat.fatTarget,
                    color: "#03C7FC",
                  },
                ]}
              />
              <div className="flex flex-col items-center absolute top-4 right-4">
                <h1 className="text-[14px] font-semibold text-white">
                  {j.calories.calorieIntake}
                </h1>
                <p className="text-[8px] font-extralight text-white">
                  Calories
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser2cVal(user2cVal + 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(j.calories.calorieTarget + user2cVal)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser2cVal(user2cVal - 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>

            <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
              <AiOutlineRight className="text-white" />
            </div>

            <ReactTooltip
              id="custom-color-no-arrow2"
              place="bottom"
              className="custom-color-no-arrow2"
              delayHide={1000}
              backgroundColor="#333B44"
              effect="solid"
            >
              <div className="w-[200px] flex flex-col gap-2">
                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">PROTEIN</p>
                    <p className="font-thin text-xs">
                      {j.proteins.proteinTarget}g
                    </p>
                  </div>

                  <ProgressBar
                    completed={j.proteins.proteinConsumed}
                    maxCompleted={j.proteins.proteinTarget}
                    customLabel="52g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F45C84"
                    bgColor="#F45C84"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">FATS</p>
                    <p className="font-thin text-xs">{j.fat.fatTarget}g</p>
                  </div>

                  <ProgressBar
                    completed={j.fat.fatConsumed}
                    maxCompleted={j.fat.fatTarget}
                    customLabel="15g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#03C7FC"
                    bgColor="#03C7FC"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">CARBS</p>
                    <p className="font-thin text-xs">{j.carb.carbTarget}g</p>
                  </div>
                  <ProgressBar
                    completed={j.carb.carbConsumed}
                    maxCompleted={j.carb.carbTarget}
                    customLabel="25g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F5C90F"
                    bgColor="#F5C90F"
                    baseBgColor="#101317"
                  />
                </div>
              </div>
            </ReactTooltip>
          </div>

          <div className="bg-[#36F5C7] p-2 rounded-lg cursor-pointer">
            <TbBell className="text-2xl font-extrabold " />
          </div>
        </div>
        {/* User 3 */}
        <div
          key={k.userId}
          className="flex items-center justify-between bg-shark-500 p-4 rounded-xl"
        >
          <div className="text-white flex items-center gap-6 w-1/6">
            <img
              class="w-14 h-14 object-cover rounded-full"
              src={k.imgUrl}
              alt="Rounded avatar"
            />
            <div>
              <h1 className="text-md font-semibold">{k.name}</h1>
              <p className="text-xs font-thin">{k.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-1/12">
            <div>
              <CircularProgressbarWithChildren
                className="h-16 w-16"
                value={k.steps.stepsWalked}
                maxValue={k.steps.stepsTarget + user3Val}
                styles={buildStyles({
                  rotation: 0.25,
                  strokeLinecap: "round",
                  pathColor: `rgba(127, 209, 140, ${
                    k.steps.stepsTarget + user3Val / 100
                  })`,
                  trailColor: "#d6d6d6",
                })}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-[14px] font-semibold text-white">
                    {k.steps.stepsWalked}
                  </h1>
                  <p className="text-[8px] font-extralight text-white">
                    Walked
                  </p>
                </div>
              </CircularProgressbarWithChildren>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser3Val(user3Val + 200)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(k.steps.stepsTarget + user3Val)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser3Val(user3Val - 200)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex text-white items-center gap-2">
                <FiUserCheck className="text-xl font-extrabold" />
                <p className="text-md font-semibold">{k.date.performedDate}</p>
              </div>
              {feedBackk ? (
                <div className="flex text-white items-center gap-2 ">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {k.date.scheduledDate}
                  </p>
                </div>
              ) : (
                <div className="flex text-white items-center gap-2 bg-red-500 py-1 px-2 rounded-lg">
                  <TbCalendarTime className="text-xl font-extrabold" />
                  <p className="text-md font-semibold">
                    {k.date.scheduledDate}
                  </p>
                </div>
              )}
            </div>
            {feedBackk ? (
              <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
                <AiOutlineRight className="text-white" />
              </div>
            ) : (
              <div className="text-white bg-red-500 py-5 px-1 rounded-lg">
                <AiOutlineExclamation className="text-white" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div
              className="text relative"
              data-tip
              data-for="custom-color-no-arrow3"
            >
              <PieChart
                lineWidth={20}
                className="h-16 w-16"
                data={[
                  {
                    title: "One",
                    value: k.proteins.proteinConsumed,
                    maxValue: k.proteins.proteinTarget,
                    color: "#F45C84",
                  },
                  {
                    title: "Two",
                    value: k.carb.carbConsumed,
                    maxValue: k.carb.carbTarget,
                    color: "#F5C90F",
                  },
                  {
                    title: "Three",
                    value: k.fat.fatConsumed,
                    maxValue: k.fat.fatTarget,
                    color: "#03C7FC",
                  },
                ]}
              />
              <div className="flex flex-col items-center absolute top-4 right-4">
                <h1 className="text-[14px] font-semibold text-white">
                  {k.calories.calorieIntake}
                </h1>
                <p className="text-[8px] font-extralight text-white">
                  Calories
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div
                onClick={() => setUser3cVal(user3cVal + 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] cursor-pointer"
              >
                <AiOutlinePlus className="text-white text-xs font-bold" />
              </div>
              <h1 className="text-[18px] font-semibold text-white">
                {kFormatter(k.calories.calorieTarget + user3cVal)}
              </h1>
              <p className="text-[12px] font-extralight text-white">Target</p>
              <div
                onClick={() => setUser3cVal(user3cVal - 100)}
                className="px-2 bg-bunker-500 rounded py-[2px] mt-1 cursor-pointer"
              >
                <AiOutlineMinus className="text-white text-xs font-bold" />
              </div>
            </div>

            <div className="text-white bg-bunker-500 py-5 px-1 rounded-lg">
              <AiOutlineRight className="text-white" />
            </div>

            <ReactTooltip
              id="custom-color-no-arrow3"
              place="bottom"
              className="custom-color-no-arrow3"
              delayHide={1000}
              backgroundColor="#333B44"
              effect="solid"
            >
              <div className="w-[200px] flex flex-col gap-2">
                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">PROTEIN</p>
                    <p className="font-thin text-xs">
                      {k.proteins.proteinTarget}g
                    </p>
                  </div>

                  <ProgressBar
                    completed={k.proteins.proteinConsumed}
                    maxCompleted={k.proteins.proteinTarget}
                    customLabel="62g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F45C84"
                    bgColor="#F45C84"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">FATS</p>
                    <p className="font-thin text-xs">{k.fat.fatTarget}g</p>
                  </div>

                  <ProgressBar
                    completed={k.fat.fatConsumed}
                    maxCompleted={k.fat.fatTarget}
                    customLabel="18g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#03C7FC"
                    bgColor="#03C7FC"
                    baseBgColor="#101317"
                  />
                </div>

                <div className="flex flex-col gap-2 bg-shark-500 py-2 px-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-thin text-xs">CARBS</p>
                    <p className="font-thin text-xs">{k.carb.carbTarget}g</p>
                  </div>
                  <ProgressBar
                    completed={k.carb.carbConsumed}
                    maxCompleted={k.carb.carbTarget}
                    customLabel="28g"
                    height="10px"
                    labelAlignment="outside"
                    labelSize="10px"
                    labelColor="#F5C90F"
                    bgColor="#F5C90F"
                    baseBgColor="#101317"
                  />
                </div>
              </div>
            </ReactTooltip>
          </div>

          <div className="bg-[#36F5C7] p-2 rounded-lg cursor-pointer">
            <TbBell className="text-2xl font-extrabold " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
