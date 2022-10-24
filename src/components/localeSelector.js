import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";

import Icon from "./icon";
import Link from "./link";
import PopDownMenu from "./popDownMenu";
import LocaleButtons from "./localeButtons";

export default function LocaleSelector({ ...props }) {
  return (
    <Popover.Group tw="flex" {...props}>
      <Popover tw="relative" className="group">
        {({ open }) => (
          <>
            <div tw="flex items-center">
              <Popover.Button
                className="group"
                css={[
                  tw`font-medium hover:text-shade-darkest`,
                  open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
                ]}
              >
                <Icon
                  icon="globe"
                  css={[
                    tw`h-5 group-hover:text-shade-neutral`,
                    open ? tw`text-shade-neutral` : tw`text-shade-light`,
                  ]}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <PopDownMenu
              left
              cta={
                <Link
                  to="https://github.com/ethereumclassic/ethereumclassic.github.io#contribute"
                  tw="-m-3 p-3 px-5 flex items-center rounded-md text-sm text-shade-light hover:bg-shade-lightest hover:text-shade-dark"
                >
                  <Icon
                    icon="language"
                    tw="flex-shrink-0 h-7 w-7"
                    aria-hidden="true"
                  />
                  <span tw="ml-3">
                    Support ETC by helping to translate this website!
                  </span>
                </Link>
              }
            >
              <LocaleButtons />
            </PopDownMenu>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
}
