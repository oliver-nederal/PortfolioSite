import React from "react";
import Logo from "../assets/logo.png";
import IconButton from "@mui/joy/IconButton";

import {
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  Listbox,
  ListboxSection,
  ListboxItem,
} from "@nextui-org/react";
import Tooltip from "@mui/joy/Tooltip";
import { FaGithub, FaDiscord, FaInstagram, FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center">
      {/*Top NavBar*/}
      <div className="sticky top-0 w-[92vw] max-w-[1500px] h-[80px] flex justify-between items-center px-4 bg-[#efeff0] text-gray-600 border-[2px] shadow-md rounded-[30px] my-[20px]">
        <div className="flex flex-row">
          <div className="mx-2 rounded-xl">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "40px", borderRadius: "35%" }}
            />
          </div>
          <div className="mx-2 flex flex-col justify-center">
            <ButtonGroup variant="outlined" spacing={1.5}>
              <Tooltip
                title="Discord"
                variant="outlined"
                placement="bottom"
                size="lg"
              >
                <IconButton>
                  {" "}
                  <FaDiscord />{" "}
                </IconButton>
              </Tooltip>
              <Tooltip
                title="GitHub"
                variant="outlined"
                placement="bottom"
                size="lg"
              >
                <IconButton>
                  {" "}
                  <FaGithub />{" "}
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </div>
        </div>

        <ul className="hidden md:flex">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Skills", "/skills"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
          ].map(([title, url]) => (
            <a
              href={url}
              className="mx-2 p-2 rounded-lg transition bg-gray-200 bg-opacity-0 duration-500 ease-in-out hover:font-bold hover:bg-opacity-100"
            >
              {title}
            </a>
          ))}
        </ul>

        <div className="md:hidden">
          <div className="flex flex-row space-x-3">
            <a
              href="/"
              className="border-2 border-slate-200 w-10 h-10 rounded-lg transition hover:shadow-md flex flex-col items-center justify-center"
            >
              <FaHome />
            </a>
            <button
              className="bg-gray-200 p-2 rounded-lg transition hover:shadow-md flex flex-row items-center justify-center"
              onClick={onOpen}
            >
              <IoMenu size={25} />
              Menu
            </button>
          </div>
          <Modal
            placement="top-center"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(OnClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Menu
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col space-y-4 py-5">
                      <Button
                        onPress={OnClose}
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        variant="light"
                      >
                        <h1 className="text-xl">Home</h1>
                      </Button>
                      <Button
                        onPress={OnClose}
                        onClick={() => {
                          window.location.href = "/about";
                        }}
                        variant="light"
                      >
                        <h1 className="text-xl">About</h1>
                      </Button>
                      <Button
                        onPress={OnClose}
                        onClick={() => {
                          window.location.href = "/projects";
                        }}
                        variant="light"
                      >
                        <h1 className="text-xl">Projects</h1>
                      </Button>
                      <Button
                        onPress={OnClose}
                        onClick={() => {
                          window.location.href = "/skills";
                        }}
                        variant="light"
                      >
                        <h1 className="text-xl">Skills</h1>
                      </Button>
                      <Button
                        onPress={OnClose}
                        onClick={() => {
                          window.location.href = "/contact";
                        }}
                        variant="light"
                      >
                        <h1 className="text-xl">Contact</h1>
                      </Button>
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
