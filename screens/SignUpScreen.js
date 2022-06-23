import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const SignUpScreen = () => {
  //render header
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2,
        }}
        onPress={() => {
          console.log("Signing up...");
        }}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: COLORS.white }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.white,
            ...FONTS.h4,
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  //render logo
  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 5,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{ width: "60%" }}
        />
      </View>
    );
  }

  //render form
  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 3,
        }}
      >
        {/* full name */}
        <View>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Full name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.lightGray}
          />
        </View>

        {/* Phone number */}
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Phone Number
          </Text>
          <View style={{ flexDirection: "row" }}>
            {/* Country code */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: "row",
                ...FONTS.body2,
              }}
              onPress={() => console.log("Show modal")}
            >
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={icons.down}
                  style={{ width: 10, height: 10, tintColor: COLORS.white }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
