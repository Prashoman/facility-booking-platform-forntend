/* eslint-disable @typescript-eslint/no-explicit-any */


export const FacilityEditValidation = (
    name: any,
    pricePerHour: any,
    location: any,
    description: any,
    setErrors: any
) => {
    if (!name) {
        setErrors((prev: any) => ({ ...prev, name: "Name is required" }));
        return false;
    } else {
        setErrors((prev: any) => ({ ...prev, name: "" }));
    }

    if (pricePerHour <= 0 || isNaN(pricePerHour)) {
        setErrors((prev: any) => ({
            ...prev,
            pricePerHour: "Price per hour must be a positive number",
        }));
        return false;
    } else {
        setErrors((prev: any) => ({ ...prev, pricePerHour: "" }));
    }

    if (!location) {
        setErrors((prev: any) => ({ ...prev, location: "Location is required" }));
        return false;
    } else {
        setErrors((prev: any) => ({ ...prev, location: "" }));
    }

    if (!description) {
        setErrors((prev: any) => ({
            ...prev,
            description: "Description is required",
        }));
        return false;
    } else {
        setErrors((prev: any) => ({ ...prev, description: "" }));
    }
    return true;
};
