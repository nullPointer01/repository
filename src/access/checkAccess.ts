import AccessEnum from "@/access/accessEnum";
//检查权限
const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  if (loginUser.userName === "倩宝") {
    console.log(needAccess);
  }
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  if (
    needAccess === AccessEnum.USER &&
    loginUserAccess === AccessEnum.NOT_LOGIN
  ) {
    return false;
  }
  return !(
    needAccess === AccessEnum.ADMIN && loginUserAccess !== AccessEnum.ADMIN
  );
};

export default checkAccess;
