import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Text, Divider, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [activeLeague, setActiveLeague] = useState("All Leagues");
  const leagues = ["KPL", "Premier League", "Ligue 1", "La Liga"];
  const matches = {
    all: [
      { id: 1, status: "Live", teams: "Team A vs Team B" },
      { id: 2, status: "Finished", teams: "Team C vs Team D" },
    ],
    live: [{ id: 1, status: "Live", teams: "Team A vs Team B" }],
    finished: [{ id: 2, status: "Finished", teams: "Team C vs Team D" }],
    schedule: [{ id: 3, status: "Scheduled", teams: "Team E vs Team F" }],
  };

  const filterMatches = (tab) => {
    return matches[tab].map((match) => (
      <Text key={match.id}>
        {match.teams} - {match.status}
      </Text>
    ));
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Box display="flex" flexDirection="row" gap="20px">
        <VStack align="stretch" w="200px" borderRight="1px" borderColor="gray.200">
          {leagues.map((league) => (
            <Button variant="ghost" key={league} onClick={() => setActiveLeague(league)} isActive={activeLeague === league}>
              {league}
            </Button>
          ))}
        </VStack>
        <Box flex="1">
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>All</Tab>
              <Tab>Live</Tab>
              <Tab>Finished</Tab>
              <Tab>Schedule</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack divider={<Divider />} spacing={4}>
                  {filterMatches("all")}
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack divider={<Divider />} spacing={4}>
                  {filterMatches("live")}
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack divider={<Divider />} spacing={4}>
                  {filterMatches("finished")}
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack divider={<Divider />} spacing={4}>
                  {filterMatches("schedule")}
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
