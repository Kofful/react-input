import React from 'react';

import { storiesOf } from '@storybook/react';
import Input from "../components/Input/Input"

storiesOf("Input", module)
    .add("view", () => <Input/>  );
