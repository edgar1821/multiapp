/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Tabs, TabItem } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "./components/Layout";
import QrUrlSchema, { QrUrlType } from "./Schemas/qrUrlSchema";
import Button from "../generator/components/Button";
const customTheme: CustomFlowbiteTheme["tabs"] = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default:
        "flex-wrap border-b border-gray-200 dark:border-gray-700",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-2 focus:ring-generator-primary focus:outline-none font-primary",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-generator-white-100 text-generator-primary dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};

//{ resolver: zodResolver(QrUrlSchema) }
function index() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<QrUrlType>({ resolver: zodResolver(QrUrlSchema) });

  function save(data: QrUrlType) {
    console.log(data);
  }
  const datawatch = watch();
  console.log("error", errors);
  console.log("datawatch", datawatch);

  return (
    <Layout>
      <div className="p-4">
        <Tabs theme={customTheme} style="default">
          <TabItem active title="Url">
            <form action="" onSubmit={handleSubmit(save)}>
              <div className="flex flex-col">
                <input
                  className={`
                  h-8 
                  w-full 
                  rounded-md
                  border-2 
                  border-generator-primary
                  px-2
                  pr-2
                  text-xs
                  text-generator-primary`}
                  {...register("url")}
                />
                {errors.url && (
                  <span className="text-red-600">
                    {errors.url.message}
                  </span>
                )}
              </div>

              <Button type="submit">Generar</Button>
            </form>
          </TabItem>
          <TabItem title="url">Edgar</TabItem>
          <TabItem title="Whatsapp">Gamarra</TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}

export default index;
