const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/profile/details",
        children: [
          {
            label: "Location",
            to: "/profile/details/location",
          },
        ],
      },
    ],
  },
  {
    label: "Setting",
    to: "/setting",
    children: [
      {
        label: "Account",
        to: "/profile/account",
      },
      {
        label: "Security",
        to: "/profile/security",
        children: [
          {
            label: "Login",
            to: "/profile/security/login",
          },
          {
            label: "Register",
            to: "/profile/security/register",
          },
        ],
      },
    ],
  },
];


export default data;