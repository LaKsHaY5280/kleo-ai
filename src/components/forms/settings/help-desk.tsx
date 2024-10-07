"use client";
import { useHelpDesk } from "@/hooks/settings/use-settings";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/section-label";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";
import Accordion from "@/components/accordian";

type Props = {
  id: string;
};

const HelpDesk = ({ id }: Props) => {
  const { register, errors, onSubmitQuestion, isQuestions, loading } =
    useHelpDesk(id);

  return (
    <Card className="grid w-full grid-cols-1 lg:grid-cols-2">
      <CardContent className="border-r-[1px] p-6">
        <CardTitle>Help Desk</CardTitle>
        <form onSubmit={onSubmitQuestion} className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you believe is frequently asked."
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="help-desk-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer to question"
              message="The answer for the question above."
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              name="answer"
              form="help-desk-form"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="font-semibold transition duration-150 ease-in-out hover:opacity-70"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="chat-window overflow-y-auto p-6">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <Accordion
                key={question.id}
                trigger={question.question}
                content={question.answer}
              />
            ))
          ) : (
            <CardDescription>No Questions to show</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  );
};

export default HelpDesk;
