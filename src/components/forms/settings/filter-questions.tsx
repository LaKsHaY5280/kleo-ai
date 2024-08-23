"use client";
import Section from "@/components/section-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useFilterQuestions } from "@/hooks/settings/use-settings";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";

type Props = {
  id: string;
};

const FilterQuestions = ({ id }: Props) => {
  const { register, errors, onAddFilterQuestions, isQuestions, loading } =
    useFilterQuestions(id);

  return (
    <Card className="grid w-full grid-cols-1 lg:grid-cols-2">
      <CardContent className="border-r-[1px] p-6">
        <CardTitle>Bot Questions</CardTitle>
        <form
          onSubmit={onAddFilterQuestions}
          className="mt-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer to question"
              message="The anwer for the question above"
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="answer"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-orange font-semibold text-white transition duration-150 ease-in-out hover:bg-orange hover:opacity-70"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="chat-window overflow-y-auto p-6">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <p key={question.id} className="font-bold">
                {question.question}
              </p>
            ))
          ) : (
            <CardDescription>No Questions</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  );
};

export default FilterQuestions;
