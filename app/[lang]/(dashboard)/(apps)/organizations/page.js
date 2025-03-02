"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, Card, TextInput } from "@mantine/core";
import { IconArrowDown, IconEdit, IconPlus } from "@tabler/icons-react";
import AddOrganizationModal from "@/components/modals/add-organization-modal";

const Organizations = () => {
  return (
    <div className=" space-y-6">
      <Card shadow="xs" padding="lg" radius="md" withBorder>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Organizations</h3>
          <div class="flex items-center ml-auto space-x-2">
            <TextInput placeholder="Search..." />
            <AddOrganizationModal />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=" font-semibold">User</TableHead>
              <TableHead> Title</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="hover:bg-muted">
              <TableCell className="  font-medium  text-card-foreground/80">
                <div className="flex gap-3 items-center">
                  <Avatar className=" rounded-full">
                    {/* <AvatarImage src={item.avatar} /> */}
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <span className=" text-sm   text-card-foreground">
                    Client
                  </span>
                </div>
              </TableCell>

              <TableCell>Title</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                <Badge variant="soft" color={`success`} className="capitalize">
                  Active
                </Badge>
              </TableCell>

              <TableCell className="flex justify-end">
                <div className="flex gap-3">
                  <Button variant="outline" size="xs" leftSection={<IconArrowDown size={18} />} >Actions</Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Organizations;
