'use client'

import { Stepper, Step, Button, Typography } from '@material-tailwind/react'

import { useState } from 'react'
import { Modal } from './Modal'

const Steps = ({ steps, confirmation }) => {
    const [activeStep, setActiveStep] = useState(0)
    const [isLastStep, setIsLastStep] = useState(false)
    const [isFirstStep, setIsFirstStep] = useState(false)

    const handleNext = () => !isLastStep && setActiveStep(cur => cur + 1)
    const handlePrev = () => !isFirstStep && setActiveStep(cur => cur - 1)

    return (
        <div className="w-full lg:px-24 py-4 ">
            <Stepper
                activeStep={activeStep}
                isLastStep={value => setIsLastStep(value)}
                isFirstStep={value => setIsFirstStep(value)}
                className="mt-10">
                {steps.map((step, index) => (
                    <Step
                        className="bg-blue-gray-50"
                        onClick={() => setActiveStep(index)}>
                        <div className="hidden lg:block absolute bottom-[3.5rem] w-max text-center">
                            <Typography
                                color={
                                    activeStep === index ? 'blue-gray' : 'gray'
                                }
                                className="font-sm">
                                {step.heading}
                            </Typography>
                        </div>
                        <step.icon className="h-5 w-5" />
                    </Step>
                ))}
            </Stepper>
            <div className="mt-10 max-w-xl mx-auto space-y-6">
                <div className="text-center">
                    <Typography
                        variant="lead"
                        color="gray"
                        className="text-lg tracking-wide capitalize">
                        STEP {activeStep + 1}
                    </Typography>
                    <Typography variant="h3">
                        {steps[activeStep]['heading']}
                    </Typography>
                </div>
                {steps[activeStep]['content']}
            </div>

            <div className="mt-10 flex justify-center gap-2">
                <Button
                    variant="text"
                    onClick={handlePrev}
                    disabled={isFirstStep}>
                    Prev
                </Button>

                {isLastStep ? (
                    <Modal
                        heading={confirmation.heading}
                        size="md"
                        label="Finish"
                        controls={confirmation.controls}
                        buttonColor="blue">
                        {confirmation.content}
                    </Modal>
                ) : (
                    <Button
                        variant="gradient"
                        color="blue"
                        onClick={handleNext}
                        disabled={isLastStep}>
                        Next
                    </Button>
                )}
            </div>
        </div>
    )
}

export default Steps
