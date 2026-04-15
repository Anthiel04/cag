import { countries } from "@/data/countries"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const UserForm = () => {
    return (
        <form id="form" action="submit" className="bg-blue-100 rounded-2xl max-w-md shadow-sm m-auto h-full py-4 px-8 flex flex-col gap-6 justify-center">
            <div className="max-w-6xl md:max-w-3xl sm:max-w-xl space-y-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input type="text" id='name' aria-label="name" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="birthday">Birthday *</Label>
                    <Input type="date" id='birthday' aria-label="birthday" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input type="number" id='phone' aria-label="phone" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {countries.map((country: { name: string }) => {
                                    return <SelectItem key={country.name} value={country.name}>{country.name}</SelectItem>
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" id='address' aria-label="address" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="group">Group</Label>
                    <Input type="number" id='group' maxLength={1} aria-label="group" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="begin">Begin of Journey</Label>
                    <Input type="date" id='begin' aria-label="begin" />
                </div>
            </div>
            <Button>Submit</Button>
        </form>
    )
}
