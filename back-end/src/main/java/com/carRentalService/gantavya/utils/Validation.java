package com.carRentalService.gantavya.utils;

import java.util.regex.Pattern;

public class  Validation {
    // Regular expression for validation
    private static final Pattern Full_NAME_PATTERN = Pattern.compile("^[a-zA-Z]+(?:\\s[a-zA-Z]+)*$");
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.com$");
    private static final Pattern PASSWORD_PATTERN = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$");
    private static final Pattern Phone_Number_Pattern =  Pattern.compile("^98\\d{8}$\n");
    // Name validation
    public static boolean isNameValid(String full_name){
        if (full_name == null) {
            return false;
        }
        String strippedName = full_name.strip();
        return !strippedName.isEmpty() && Full_NAME_PATTERN.matcher(strippedName).matches();
    }

    // Email validation
    public static boolean isEmailValid(String email){
        if (email == null) {
            return false;
        }
        String trimmedEmail = email.strip();
        return !trimmedEmail.isEmpty() && EMAIL_PATTERN.matcher(trimmedEmail).matches();
    }

    // Password validation
    public static boolean isPasswordValid(String password){
        if (password == null) {
            return false;
        }
        String trimmedPassword = password.strip();
        return trimmedPassword.length() >= 8 && trimmedPassword.length() <= 15 && PASSWORD_PATTERN.matcher(trimmedPassword).matches();
    }

    // Phone number validation
    public static boolean isNumberValid(String phone){
        if(phone == null){
            return false;
        }
        String trimmedNumber = phone.strip();
        return !trimmedNumber.isEmpty() && Phone_Number_Pattern.matcher(trimmedNumber).matches();
    }
}
