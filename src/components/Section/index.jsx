import { Button, Text } from '@nextui-org/react';
import AddSection from 'components/Modal/Section';
import { useAuth } from 'context/authContext';
import { getUserSections } from 'db/sections';
import { Add } from 'icons/Add';
import { useEffect, useState } from 'react';
import { CreateCardSection } from './Create';

import { GridSectionContainer, TitleSectionContainer } from './styled';

export default function Section() {
  let numberSection = 0;
  const { userConf, sections, setSections } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getUserSections(userConf.email).then((s) => setSections(s));
  }, [userConf.email]);
  return (
    <>
      <div>
        <TitleSectionContainer>
          <Text h3> Tus secciones </Text>
          <Button
            auto
            light
            bordered
            borderWeight="normal"
            icon={<Add fill={'currentColor'} />}
            onClick={() => setOpen(true)}
          />
        </TitleSectionContainer>

        <GridSectionContainer>
          {sections &&
            sections.map((section) => {
              numberSection++;
              return (
                <CreateCardSection key={numberSection} section={section} />
              );
            })}
        </GridSectionContainer>
      </div>

      <AddSection open={open} setOpen={setOpen} />
    </>
  );
}
