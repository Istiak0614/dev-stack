import { useEffect, useState } from "react";
import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

import type { Technology } from "./types";

const App = () => {
  const [technologies, setTechnologies] =
    useState<Technology[]>([]);

  const [stack, setStack] =
    useState<Technology[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error(
            "Technology data could not be loaded. Make sure public/data.json exists."
          );
        }
        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(
            "Something went wrong while loading technologies."
          );
        }
      } finally {
        setLoading(false);
      }
    };
    loadTechnologies();
  }, []);

  const handleAddToStack = (
    tech: Technology
  ) => {
    const isAlreadyAdded = stack.some(
      (item) => item.id === tech.id
    );
    if (isAlreadyAdded) {
      toast.warning(
        `${tech.name} is already in your stack!`
      );

      return;
    }
    setStack((previousStack) => [
      ...previousStack,
      tech,
    ]);
    toast.success(
      `${tech.name} added to your stack!`
    );
  };
  const handleRemoveFromStack = (
    id: string
  ) => {
    const technologyToRemove = stack.find(
      (item) => item.id === id
    );
    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );
    if (technologyToRemove) {
      toast.info(
        `${technologyToRemove.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }
    setStack([]);

    toast.error(
      "All technologies removed from your stack."
    );
  };
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MainLayout
          technologies={technologies}
          stack={stack}
          loading={loading}
          error={error}
          handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default App;