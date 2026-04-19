"use client";
import { countries } from "@/data/countries"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

import { Country, CountryDropdown } from "../ui/country-dropdown";

import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldTitle
} from "../ui/field";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "../ui/input-group";

export const UserForm = () => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);

    const formSchema = z.object({
        name: z.string({ error: "Please fill in your full name" }).min(10, { error: "Full Name must have more than 10 characters" }),
        birthday: z.date({ error: "Please fill in your birthday" }),
        phone: z.string({ error: "Please fill in your phone number" }).max(15, { error: "Numbers are not larger than 15 digits including the + and prefix" }), // not z.number()
        country: z.string({ error: "Please select a country" }),
        address: z.string().min(5).max(64).optional(),
        group: z.string().optional(),
        begin: z.date().optional(),
        notes: z.string().max(100).optional(),
    });

    type UserFormValues = z.infer<typeof formSchema>;

    type UserFormInput = z.input<typeof formSchema>;
    type UserFormOutput = z.output<typeof formSchema>;

    const form = useForm<UserFormInput, unknown, UserFormOutput>({
        resolver: zodResolver(formSchema as any),
        mode: "onChange",
        defaultValues: {
            name: "",
            birthday: undefined,
            phone: "",
            country: "",
            address: "",
            group: undefined,
            begin: undefined,
            notes: "",
        },
    });
    function onSubmit(data: UserFormValues) {
        toast.success(`${selectedCountry?.name} ${selectedCountry?.emoji} `);
    }


    return (
        <Card className="w-full m-auto sm:max-w-md">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Help us organize by reporting your Name, Group and Phone on CAG Community.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="cagform" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name">
                                        Full Name *
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="John Doe"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="birthday"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="birthday">
                                        Birthday *
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="date"
                                        value={field.value ? field.value.toISOString().slice(0, 10) : ""}
                                        onChange={(e) =>
                                            field.onChange(e.target.value ? new Date(e.target.value) : undefined)
                                        }
                                        id="birthday"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="phone">
                                        Phone Number
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="phone"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="+12345678910"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    <FieldDescription>
                                        Remember to add the prefix "+"
                                    </FieldDescription>
                                </Field>
                            )}
                        />
                        <Controller
                            name="country"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="country">
                                        Country
                                    </FieldLabel>
                                    <CountryDropdown
                                        placeholder="Country"
                                        defaultValue={field.value}
                                        onChange={(country) => {
                                            field.onChange(country.alpha3);
                                        }}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="address"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="address">
                                        Address
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="address"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Eiffel Tower"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="group"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="group">
                                        Group
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="group"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Group"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="begin"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="begin">
                                        Begin of Journey
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="date"
                                        value={field.value ? field.value.toISOString().slice(0, 10) : ""}
                                        onChange={(e) =>
                                            field.onChange(e.target.value ? new Date(e.target.value) : undefined)
                                        }
                                        id="begin"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="John Doe"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="notes"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="notes">
                                        Additional Notes
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="notes"
                                            placeholder="I joined because i believe in Almighty God"
                                            rows={6}
                                            className="min-h-24 resize-none"
                                            aria-invalid={fieldState.invalid}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value?.length}/100 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    <FieldDescription>
                                        The fields that have a '*' symbol are mandatory, the rest is optional but if you are able to fill them all that would be pretty helpful.
                                    </FieldDescription>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="cagform">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}