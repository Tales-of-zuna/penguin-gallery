import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="w-full flex flex-row relative justify-between h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-teal-500 items-center">
        <TextInput
          className="flex w-full text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={`#7b7b8b`}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" ? !showPassword : false}
        />
        {title === "Password" && (
          <TouchableOpacity
            className="text-white absolute right-4 text-base font-psemibold"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
